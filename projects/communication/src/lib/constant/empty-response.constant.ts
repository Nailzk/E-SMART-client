import { IPaginationResponse } from "../interface";

export const EMPTY_RESPONSE:IPaginationResponse<any> = {
    data: [],
    page: 0,
    pageCount: 0,
    total: 0,
    count: 0
}