import { NextRequest, NextResponse } from "next/server";

const SITE_ID = "abcd.health";

const getBackendBaseUrl = () =>
  "https://seo-blog-backend-seven.vercel.app".replace(/\/$/, "");

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const backendBaseUrl = getBackendBaseUrl();
    const query = new URLSearchParams(request.nextUrl.searchParams);
    query.set("siteId", SITE_ID);

    const upstreamUrl = `${backendBaseUrl}/api/posts/${encodeURIComponent(slug)}?${query.toString()}`;
    const upstreamResponse = await fetch(upstreamUrl, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    const data = await upstreamResponse.json();
    return NextResponse.json(data, { status: upstreamResponse.status });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to blog backend",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 }
    );
  }
}
