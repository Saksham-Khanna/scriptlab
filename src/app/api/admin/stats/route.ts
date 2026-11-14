import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = {
      totals: {
        students: 156,
        instructors: 8,
        courses: 12,
        enrollments: 342,
        submissions: 89,
        pendingReviews: 7,
      },
      activity: [
        {
          id: 1,
          action: "user.registered",
          detail: null,
          createdAt: new Date(Date.now() - 1 * 3600000).toISOString(),
          userName: "Jordan Smith",
        },
        {
          id: 2,
          action: "course.enrolled",
          detail: "The Commercial Spec: Writing Screenplays That Sell",
          createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
          userName: "Casey Johnson",
        },
        {
          id: 3,
          action: "submission.created",
          detail: "Logline & Irony Analysis",
          createdAt: new Date(Date.now() - 3 * 3600000).toISOString(),
          userName: "Morgan Lee",
        },
        {
          id: 4,
          action: "feedback.given",
          detail: "First 10 Pages",
          createdAt: new Date(Date.now() - 4 * 3600000).toISOString(),
          userName: "Sarah Jenkins",
        },
        {
          id: 5,
          action: "course.created",
          detail: "Advanced TV Showrunner Masterclass",
          createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
          userName: "Sarah Jenkins",
        },
        {
          id: 6,
          action: "lesson.completed",
          detail: "What 'Commercial' Actually Means",
          createdAt: new Date(Date.now() - 6 * 3600000).toISOString(),
          userName: "Alex Rivera",
        },
        {
          id: 7,
          action: "user.login",
          detail: null,
          createdAt: new Date(Date.now() - 7 * 3600000).toISOString(),
          userName: "Taylor Brown",
        },
        {
          id: 8,
          action: "course.updated",
          detail: "The Commercial Spec: Writing Screenplays That Sell",
          createdAt: new Date(Date.now() - 8 * 3600000).toISOString(),
          userName: "Sarah Jenkins",
        },
      ],
    };

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}
