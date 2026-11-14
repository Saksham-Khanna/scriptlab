import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dbPath = path.resolve(process.cwd(), "backend/data/db.json");
    let courses = [];
    let assignments = [];
    if (fs.existsSync(dbPath)) {
      const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
      courses = db.courses || [];
      assignments = db.assignments || [];
    }

    const enrolledCourses = courses.map((c: any) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      tagline: c.tagline,
      description: c.description,
      level: c.level,
      durationWeeks: c.durationWeeks,
      coverImage: c.coverImage,
      outcomes: c.outcomes,
      isPublished: c.isPublished,
      isFeatured: c.isFeatured,
      categoryId: c.categoryId,
      categoryName: "Commercial Screenwriting",
      categorySlug: "commercial-screenwriting",
      instructorId: c.instructorId,
      instructorName: "Sarah Jenkins",
      createdAt: c.createdAt,
      enrollmentCount: 2,
      progress: { total: 3, completed: 1, percent: 33 },
    }));

    const data = {
      enrolledCourses,
      overall: { total: 7, completed: 2, percent: 29 },
      recentLessons: [
        { lessonId: 1, title: "What 'Commercial' Actually Means", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", lastAccessedAt: new Date().toISOString(), completed: true },
        { lessonId: 2, title: "Coverage Walkthrough: Anatomy of a Pass", courseTitle: "The Commercial Spec: Writing Screenplays That Sell", lastAccessedAt: new Date().toISOString(), completed: false },
      ],
      pendingAssignments: assignments.map((a: any) => ({
        id: a.id,
        title: a.title,
        courseTitle: "The Commercial Spec: Writing Screenplays That Sell",
        dueDate: a.dueDate,
      })),
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
