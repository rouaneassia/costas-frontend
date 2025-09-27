import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

function getFullFileUrl(file_path) {
  if (!file_path) return null;
  if (file_path.startsWith("http")) return file_path;
  return `${BACKEND_URL}${file_path.replace(/\\/g, "/")}`;
}

function getYoutubeID(url) {
  if (!url) return null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtu.be")) {
      return urlObj.pathname.slice(1);
    }
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }
  } catch {
    const regExp = /^[a-zA-Z0-9_-]{11}$/;
    if (regExp.test(url)) return url;
  }
  return null;
}

function Post({ post }) {
  const title = post.title_fr || post.title_en || post.title_ar || "Sans titre";
  const description = post.description_fr || post.description_en || post.description_ar || "";
  // ❌ حيدنا toLocaleString وخليينا التاريخ يبان كما دخلتيه فالداشبورد
  const date = post.date || post.created_at || "";

  return (
    <article className="max-w-2xl mx-auto bg-white shadow-xl hover:shadow-2xl rounded-2xl mb-10 overflow-hidden transition-shadow duration-300 ">
      <header className="flex items-center gap-4 px-5 py-4 bg-gray-300">
        <div>
          <time className="text-sm text-gray-500">{date}</time>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
      </header>

      <div className="px-5 py-4 text-neutral-700 leading-relaxed whitespace-pre-line">
        {description}
      </div>

      <div className="w-full bg-black max-h-[500px] overflow-hidden">
        {post.type === "image" && post.file_path && (
          <img
            src={getFullFileUrl(post.file_path)}
            alt={title}
            className="w-full object-cover"
            loading="lazy"
          />
        )}

        {post.type === "video" && post.file_path && (
          <video controls className="w-full h-auto">
            <source src={getFullFileUrl(post.file_path)} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        )}

        {post.type === "document" && post.file_path && (
          <a
            href={getFullFileUrl(post.file_path)}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-white bg-blue-600 hover:bg-blue-700 py-4 text-lg font-medium"
          >
            📄 Télécharger le document
          </a>
        )}

        {post.type === "video" && post.video_url && (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${getYoutubeID(post.video_url)}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </article>
  );
}

export default function PublicationsFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/publications`);
        setPosts(res.data);
      } catch (error) {
        console.error("Erreur chargement publications :", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen py-12 px-4">
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-blue-600" size={40} />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Aucune publication disponible.</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </main>
  );
}
