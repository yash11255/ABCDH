"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacy-policy.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('Privacy Policy not found.'));
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <article className="prose prose-blue dark:prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
