import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = [
      {
        id: 1,
        title: "The Commercial Spec: Writing Screenplays That Sell",
        slug: "the-commercial-spec-writing-screenplays-that-sell",
        tagline: "Learn how produced writers turn an idea into a marketable feature spec.",
        description: "Most first screenplays fail not because the writer lacks talent...",
        level: "beginner",
        durationWeeks: 6,
        coverImage: "/images/course-commercial.svg",
        outcomes: ["Evaluate premise", "Write logline", "Understand coverage"],
        isPublished: true,
        isFeatured: true,
        categoryId: 1,
        categoryName: "Commercial Screenwriting",
        categorySlug: "commercial-screenwriting",
        instructorId: 2,
        instructorName: "Sarah Jenkins",
        createdAt: new Date().toISOString(),
        enrollmentCount: 12,
        assignmentCount: 5,
      },
      {
        id: 2,
        title: "Advanced TV Showrunner Masterclass",
        slug: "advanced-tv-showrunner-masterclass",
        tagline: "Master pilot structure, series bibles, and running a writers' room.",
        description: "Television is a writer's medium...",
        level: "advanced",
        durationWeeks: 8,
        coverImage: "/images/course-tv.svg",
        outcomes: ["Architect pilot", "Write series bible"],
        isPublished: true,
        isFeatured: true,
        categoryId: 6,
        categoryName: "Writers' Room Collaboration",
        categorySlug: "writers-room-collaboration",
        instructorId: 2,
        instructorName: "Sarah Jenkins",
        createdAt: new Date().toISOString(),
        enrollmentCount: 8,
        assignmentCount: 3,
      },
    ];

    const data = {
      courses,
      stats: {
        courses: 2,
        students: 20,
        pendingReviews: 3,
        reviewed: 47,
      },
      pendingSubmissions: [
        {
          id: 1,
          assignmentTitle: "Logline & Irony Analysis",
          courseTitle: "The Commercial Spec: Writing Screenplays That Sell",
          studentName: "Alex Rivera",
          status: "pending",
          submittedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
        },
        {
          id: 2,
          assignmentTitle: "First 10 Pages",
          courseTitle: "Advanced TV Showrunner Masterclass",
          studentName: "Jordan Smith",
          status: "pending",
          submittedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
        },
        {
          id: 3,
          assignmentTitle: "Series Bible Draft",
          courseTitle: "Advanced TV Showrunner Masterclass",
          studentName: "Morgan Lee",
          status: "pending",
          submittedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
        },
      ],
      recentSubmissions: [
        {
          id: 4,
          assignmentTitle: "Coverage Analysis",
          courseTitle: "The Commercial Spec: Writing Screenplays That Sell",
          studentName: "Casey Johnson",
          status: "reviewed",
          submittedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
        },
        {
          id: 5,
          assignmentTitle: "Pilot Outline",
          courseTitle: "Advanced TV Showrunner Masterclass",
          studentName: "Taylor Brown",
          status: "reviewed",
          submittedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
        },
      ],
    };

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}
