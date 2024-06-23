import { FromSchema } from "json-schema-to-ts";

const statementSchema = {
  type: "object",
  required: ["english", "phonetic", "chinese"],
  properties: {
    english: { type: "string" },
    phonetic: { type: "string" },
    chinese: { type: "string" },
  },
} as const;

export const coursePackSchema = {
  type: "object",
  required: ["title", "description", "cover", "courses"],
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    cover: { type: "string" },
    courses: {
      type: "array",
      items: {
        type: "object",
        required: ["title", "description", "statements"],
        properties: {
          title: { type: "string" },
          description: { type: "string" },
          statements: {
            type: "array",
            items: {
              ...statementSchema,
            },
          },
        },
      },
    },
  },
} as const;

export const updateCoursePackParamsSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
} as const;

export type CreateCoursePack = FromSchema<typeof coursePackSchema>;

export type UpdateCoursePackBody = FromSchema<typeof coursePackSchema>;

export type UpdateCoursePackParams = FromSchema<typeof updateCoursePackParamsSchema>;
export type Statement = FromSchema<typeof statementSchema>;

export const deleteCoursePackSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
} as const;

export type DeleteCoursePack = FromSchema<typeof deleteCoursePackSchema>;
