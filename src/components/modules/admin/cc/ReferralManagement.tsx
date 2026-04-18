"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { Plus, Trash2, Tag, Percent, Users, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { createClient } from "@/integrations/supabase/client";

interface ReferralCode {
  id: string;
  code: string;
  discount_percentage: number;
  max_uses: number | null;
  current_uses: number;
  usage_limit_team: number | null;
  is_active: boolean;
  description: string | null;
}

export function ReferralManagement() {
  const [codes, setCodes] = useState<ReferralCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form state
  const [newCode, setNewCode] = useState("");
  const [newDiscount, setNewDiscount] = useState(15);
  const [newMaxUses, setNewMaxUses] = useState<number | "">("");
  const [newTeamLimit, setNewTeamLimit] = useState<number | "">(2);
  const [newDesc, setNewDesc] = useState("");

  const supabase = createClient();

  const fetchCodes = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("referral_codes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching codes:", error);
    } else {
      setCodes(data || []);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchCodes();
  }, [fetchCodes]);

  async function handleAddCode(e: React.FormEvent) {
    e.preventDefault();
    if (!newCode) return;
    
    setIsProcessing(true);
    const { error } = await supabase
      .from("referral_codes")
      .insert({
        code: newCode.toUpperCase().trim(),
        discount_percentage: newDiscount,
        max_uses: newMaxUses === "" ? null : newMaxUses,
        usage_limit_team: newTeamLimit === "" ? null : newTeamLimit,
        description: newDesc,
      });

    if (error) {
      alert(error.message);
    } else {
      setNewCode("");
      setNewDiscount(15);
      setNewMaxUses("");
      setNewDesc("");
      setIsAdding(false);
      fetchCodes();
    }
    setIsProcessing(false);
  }

  async function toggleStatus(id: string, currentStatus: boolean) {
    const { error } = await supabase
      .from("referral_codes")
      .update({ is_active: !currentStatus })
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      setCodes(codes.map(c => c.id === id ? { ...c, is_active: !currentStatus } : c));
    }
  }

  async function deleteCode(id: string) {
    if (!confirm("Are you sure you want to delete this code?")) return;
    
    const { error } = await supabase
      .from("referral_codes")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      setCodes(codes.filter(c => c.id !== id));
    }
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-300" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-avenir-black text-2xl text-gray-900">Referral Code Management</h2>
        <Button 
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2"
          variant={isAdding ? "outline" : "default"}
        >
          {isAdding ? "Cancel" : <><Plus className="h-4 w-4" /> Add New Code</>}
        </Button>
      </div>

      {isAdding && (
        <div className="rounded-xl border border-green-100 bg-green-50/30 p-6 animate-fade-in">
          <form onSubmit={handleAddCode} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-bold text-gray-700">Referral Code *</Label>
              <Input 
                value={newCode} 
                onChange={(e) => setNewCode(e.target.value)}
                placeholder="Ex: PARTNER15"
                className="bg-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-bold text-gray-700">Discount Percentage (%) *</Label>
              <Input 
                type="number"
                value={newDiscount} 
                onChange={(e) => setNewDiscount(Number(e.target.value))}
                placeholder="Ex: 15 (for 15%)"
                className="bg-white"
                min="0"
                max="100"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-bold text-gray-700">Usage Limit (Teams) - Optional</Label>
              <Input 
                type="number"
                value={newTeamLimit} 
                onChange={(e) => setNewTeamLimit(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="Ex: 2 (Limit code to 2 teams)"
                className="bg-white"
              />
              <p className="text-[10px] text-gray-400">Restricts how many successful teams can use this code.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-bold text-gray-700">Description</Label>
              <Input 
                value={newDesc} 
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Ex: Strategic Partnership with X"
                className="bg-white"
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <Button type="submit" disabled={isProcessing} className="bg-green-500 text-white">
                {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Referral Code"}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {codes.map((code) => (
          <div key={code.id} className={`rounded-xl border bg-white p-5 shadow-sm transition-all ${!code.is_active ? "opacity-60" : "hover:border-green-200"}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-green-500" />
                <span className="font-avenir-black text-lg text-gray-900">{code.code}</span>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => toggleStatus(code.id, code.is_active)}
                  className={`p-1.5 rounded-md ${code.is_active ? "text-green-600 hover:bg-green-50" : "text-gray-400 hover:bg-gray-100"}`}
                  title={code.is_active ? "Deactivate" : "Activate"}
                >
                  {code.is_active ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                </button>
                <button 
                  onClick={() => deleteCode(code.id)}
                  className="p-1.5 rounded-md text-red-400 hover:bg-red-50 hover:text-red-600"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-gray-500 font-lato-regular">
                  <Percent className="h-3.5 w-3.5" />
                  Discount
                </div>
                <span className="font-avenir-heavy text-gray-900">{code.discount_percentage}% {code.discount_percentage === 100 && "(FREE)"}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-gray-500 font-lato-regular">
                  <Users className="h-3.5 w-3.5" />
                  Team Limit
                </div>
                <span className="font-avenir-heavy text-gray-900">{code.usage_limit_team || "Unlimited"}</span>
              </div>

              {code.description && (
                <p className="text-xs text-gray-400 font-lato-regular border-t pt-2 mt-2">
                  {code.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {codes.length === 0 && !isAdding && (
        <div className="text-center py-12 rounded-xl border border-dashed border-gray-200">
          <Tag className="h-10 w-10 text-gray-200 mx-auto mb-3" />
          <p className="text-gray-400 font-lato-regular">No referral codes created yet.</p>
          <Button variant="link" onClick={() => setIsAdding(true)} className="text-green-500 mt-2">
            Create your first code
          </Button>
        </div>
      )}
    </div>
  );
}
