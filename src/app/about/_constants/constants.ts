export enum DepartmentsAbbreviation {
    PHOTO = "photo",
    PR_EXTERNAL = "pr-ext",
    PR_SMS = "pr-sms",
    CW = "cw",
    DESIGN = "design",
  }
  
export enum DepartmentsFull {
    PHOTO = "Ban Photo",
    PR_EXTERNAL = "Ban PR - Đối Ngoại",
    PR_SMS = "Ban PR - Social Media",
    CW = "Ban Nội Dung",
    DESIGN = "Ban Design",
}

export const PHOTO_NAME_FULL = DepartmentsFull.PHOTO;
export const PR_EXTERNAL_NAME_FULL = DepartmentsFull.PR_EXTERNAL;
export const PR_SMS_NAME_FULL = DepartmentsFull.PR_SMS;
export const CW_NAME_FULL = DepartmentsFull.CW;
export const DESIGN_NAME_FULL = DepartmentsFull.DESIGN;
export const PHOTO_NAME_ABBREV = DepartmentsAbbreviation.PHOTO;
export const PR_EXTERNAL_NAME_ABBREV = DepartmentsAbbreviation.PR_EXTERNAL;
export const PR_SMS_NAME_ABBREV = DepartmentsAbbreviation.PR_SMS;
export const CW_NAME_ABBREV = DepartmentsAbbreviation.CW;
export const DESIGN_NAME_ABBREV = DepartmentsAbbreviation.DESIGN;

type DepartmentDescriptionKeys =
  | typeof PHOTO_NAME_ABBREV
  | typeof PR_EXTERNAL_NAME_ABBREV
  | typeof PR_SMS_NAME_ABBREV
  | typeof CW_NAME_ABBREV
  | typeof DESIGN_NAME_ABBREV;
  
export const DEPARTMENT_DESCRIPTION: Record<DepartmentDescriptionKeys, string> = {
    [PHOTO_NAME_ABBREV]:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?",
    [PR_EXTERNAL_NAME_ABBREV]:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?",
    [PR_SMS_NAME_ABBREV]:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?",
    [CW_NAME_ABBREV]:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?",
    [DESIGN_NAME_ABBREV]:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?",
};

export interface DepartmentSchema {
    abbreviation: DepartmentsAbbreviation;
    full: DepartmentsFull;
    description: string;
    image_url: string;
  }
  
export const DEPARTMENT_INFO: DepartmentSchema[] = [
{
    abbreviation: PHOTO_NAME_ABBREV,
    full: PHOTO_NAME_FULL,
    description: DEPARTMENT_DESCRIPTION[PHOTO_NAME_ABBREV],
    image_url: `/${PHOTO_NAME_ABBREV}`,
},
{
    abbreviation: PR_EXTERNAL_NAME_ABBREV,
    full: PR_EXTERNAL_NAME_FULL,
    description: DEPARTMENT_DESCRIPTION[PR_EXTERNAL_NAME_ABBREV],
    image_url: `/${PR_EXTERNAL_NAME_ABBREV}`,
},
{
    abbreviation: PR_SMS_NAME_ABBREV,
    full: PR_SMS_NAME_FULL,
    description: DEPARTMENT_DESCRIPTION[PR_SMS_NAME_ABBREV],
    image_url: `/${PR_SMS_NAME_ABBREV}`,
},
{
    abbreviation: CW_NAME_ABBREV,
    full: CW_NAME_FULL,
    description: DEPARTMENT_DESCRIPTION[CW_NAME_ABBREV],
    image_url: `/${CW_NAME_ABBREV}`,
},
{
    abbreviation: DESIGN_NAME_ABBREV,
    full: DESIGN_NAME_FULL,
    description: DEPARTMENT_DESCRIPTION[DESIGN_NAME_ABBREV],
    image_url: `/${DESIGN_NAME_ABBREV}`,
},
];