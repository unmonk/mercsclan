"use client";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function ShortenerPage() {
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState<any[]>([]);

  return (
    <main className="flex min-h-screen flex-col justify-between text-center p-4">
      <h1 className="text-3xl">Mercs Redirect</h1>
      <div>
        <form
          onSubmit={async (e) => {
            setLoading(true);
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const url = new FormData(form).get("url")!;
            const res = await fetch("/api/shorten", {
              method: "POST",
              body: JSON.stringify({ url }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (!res.ok) {
              throw new Error();
            }
            const data: { url: string; id: string } = await res.json();
            setUrls((urls) => [...urls, { old: url, new: data.url }]);
            form.reset();
            setLoading(false);
          }}
        >
          <div className="flex flex-row gap-4">
            <Input
              name="url"
              type="url"
              placeholder="🔗 Shorten your link"
              className="w-5/6"
              disabled={loading}
            />
            <Button className="w-1/6 animate-in" disabled={loading}>
              Shorten
            </Button>
          </div>
        </form>
        {urls && (
          <div className="p-2 flex flex-col gap-1">
            {urls.map((url) => {
              return (
                <div key={url.new}>
                  <div className="flex flex-row justify-center gap-6 items-center mb-1">
                    <a
                      href={url.new}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl underline bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700"
                    >
                      {url.new}
                    </a>
                    <CopyButton value={url.new} />
                  </div>
                  <p className="text-xs text-neutral-500 mb-1">
                    {url.old} → {url.new}
                  </p>
                  <Separator />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <p className="text-xs text-accent">Powered by MercChan</p>
    </main>
  );
}
