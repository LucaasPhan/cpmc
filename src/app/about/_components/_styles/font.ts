import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ["vietnamese"],
    style: ["italic", "normal"]
})

export const font = raleway.className;
