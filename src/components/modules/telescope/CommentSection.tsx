"use client";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button180 from "@/components/elements/Button180";
import { ChevronRight } from "lucide-react";

interface Comment {
  id: number;
  username: string;
  comment: string;
  created_at: string;
}

const CommentSection = ({ telescopeId }: { telescopeId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment?telescopeId=${telescopeId}`);
      const data = await res.json();
      const formatted = Array.isArray(data) ? data : data.data || [];
      setComments(formatted);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [telescopeId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          telescope_id: telescopeId,
          username,
          user_email: email,
          comment,
        }),
      });

      if (res.ok) {
        setUsername("");
        setEmail("");
        setComment("");
        await fetchComments();
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-gray-100">
      <div className="mx-[5%] h-[1px] bg-white md:mx-[20%]" />
      <Container className="px-[5%] lg:px-[26%]">
        <h2 className="mb-6 text-2xl font-semibold">Comments</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="text-black-300 h-full w-full rounded-lg bg-gray-100 p-2"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="text-black-300 h-full w-full rounded-lg bg-gray-100 p-2"
            placeholder="Your email (won't be shown)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="text-black-300 h-full w-full rounded-lg bg-gray-100 p-2"
            placeholder="Write your comment..."
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button180
            text={`${loading ? "Posting..." : "Post Comment"}`}
            className={`border-0 bg-green-300 text-white hover:bg-green-400 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading}
          />
        </form>

        <div className="my-10">
          {comments.length === 0 && (
            <p className="flex flex-row gap-2">
              {" "}
              <ChevronRight />
              No comments for this post
            </p>
          )}
          {comments.length > 0 && (
            <>
              <span className="flex flex-row gap-2">
                <ChevronRight />
                This post has {comments.length} comment{comments.length !== 1 ? "s" : ""}{" "}
              </span>
              {Array.isArray(comments) &&
                comments.map((c) => (
                  <div key={c.id} className="border-b border-white p-4">
                    <div className="flex flex-row items-center gap-3">
                      <p className="font-bold">{c.username}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(c.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <p className="mt-2">{c.comment}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CommentSection;
