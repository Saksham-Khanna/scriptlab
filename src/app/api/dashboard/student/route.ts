import { NextResponse } from "next/server";

export async function GET() {
  try {
    const enrolledCourses = [
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
        enrollmentCount: 2,
        progress: { total: 3, completed: 1, percent: 33 },
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
        enrollmentCount: 1,
        progress: { total: 2, completed: 0, percent: 0 },
      }
    ];

    const data = {
      enrolledCourses,
      overall: { total: 5, completed: 1, percent: 20 },
      recentLessons: [
        { lessonId: 1, title: "What 'Commercial' Actually Means", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", lastAccessedAt: new Date().toISOString(), completed: true },
        { lessonId: 2, title: "Coverage Walkthrough: Anatomy of a Pass", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", lastAccessedAt: new Date().toISOString(), completed: false },
      ],
      pendingAssignments: [
        { id: 1, title: "Logline & Irony Analysis", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", dueDate: new Date(Date.now() + 7 * 86400000).toISOString() },
        { id: 2, title: "First 10 Pages Spec Opening", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", dueDate: new Date(Date.now() + 14 * 86400000).toISOString() },
      ],
      recentFeedback: [
        {
          submissionId: 1,
          assignmentId: 1,
          assignmentTitle: "Logline & Irony Analysis",
          courseTitle: "The Commercial Spec: Writing Screenplays That Sell",
          score: 92,
          maxScore: 100,
          comments: "Excellent work on these loglines, Alex! Fantastic dramatic irony and high stakes.",
          createdAt: new Date().toISOString(),
          reviewerName: "Sarah Jenkins",
        }
      ],
      continueLesson: {
        lessonId: 2,
        title: "Coverage Walkthrough: Anatomy of a Pass",
        courseTitle: "The Commercial Spec: Writing Screenplays That Sell",
      }
    };

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
