import { Class } from "../models/class";
import { LineItem } from "../models/lineItem";
import { Result } from "../models/result";

export interface ServiceApi {

    getClassesForUser(userId: string): Promise<Class[]>;

    getResultsForStudentForClass(classId: string, studentId: string): Promise<Result[]>;

    isPreQuizDone(subjectCode: string, classId: string, studentId: string): Promise<boolean>;

    getLineItemsForClassForLessonId(classId: string, LessonId: string): Promise<LineItem[]>;

    putLineItem(classId: string, lessonId: string): Promise<LineItem>;

    putResult(userId: string, classId: string, LessonId: string, score: number): Promise<Result | undefined>;

}