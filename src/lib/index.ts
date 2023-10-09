import {
    MXIKSearchSymbol,
    MXIKSearchByParams,
    MXIKByCode,
    MXIKBySubpositions,
} from "../api";
import {
    MXIKCode,
    MXIKDetail,
    MXIKSearchOptionsObj,
    MXIKSearchResponseObj,
    MXIKSearchOptionalParamsObj,
} from "../typings";
import { MXIKUnknownException } from "../exceptions";

/**
 * Search items by keyword
 * @param keyword {string}
 * @param limit {number}
 * @returns {Promise<MXIKSearchResponseObj>}
 */
export async function MXIKSearch(
    keyword: string,
    { limit, lang }: MXIKSearchOptionsObj
): Promise<MXIKSearchResponseObj> {
    try {
        const { data: response } = await MXIKSearchSymbol({
            keyword,
            limit,
            lang,
        });

        return {
            items: response.data.content,
            pagination: {
                totalPages: response.data.totalPages,
                totalItems: response.data.totalElements,
                perPage: response.data.size,
                isFirstPage: response.data.first,
                isLastPage: response.data.last,
            },
        };
    } catch (error) {
        console.log(error);
        throw new MXIKUnknownException("Something wrong");
    }
}
/**
 * Search items by mxik code
 * @param keyword {string}
 * @param limit {number}
 * @returns {Promise<MXIKSearchResponseObj>}
 */
export async function MXIKSearchByCode(
    keyword: string,
    { limit, lang }: MXIKSearchOptionsObj
): Promise<MXIKSearchResponseObj> {
    try {
        const { data: response } = await MXIKSearchByParams({
            keyword,
            limit,
            lang,
        });

        return {
            items: response.data.content,
            pagination: {
                totalPages: response.data.totalPages,
                totalItems: response.data.totalElements,
                perPage: response.data.size,
                isFirstPage: response.data.first,
                isLastPage: response.data.last,
            },
        };
    } catch (error) {
        throw new MXIKUnknownException("Something wrong");
    }
}

/**
 * Get MXIK details by code
 * @param code {number}
 * @return {Promise<MXIKDetail>}
 */
export async function MXIKDetails(
    code: MXIKCode,
    { limit, lang }: MXIKSearchOptionalParamsObj
): Promise<MXIKDetail> {
    try {
        const { data: response } = await MXIKByCode(code, { limit, lang });

        return response;
    } catch (error) {
        throw new MXIKUnknownException("Something wrong");
    }
}

/**
 * Search items by keyword in subpositions
 * @param keyword {string}
 * @param limit {number}
 * @returns {Promise<MXIKSearchResponseObj>}
 */
export async function MXIKSearchBySubpositions(
    keyword: string,
    { limit, lang }: MXIKSearchOptionsObj
): Promise<MXIKSearchResponseObj> {
    try {
        const { data: response } = await MXIKBySubpositions({
            keyword,
            limit,
            lang,
        });

        return {
            items: response.data.content,
            pagination: {
                totalPages: response.data.totalPages,
                totalItems: response.data.totalElements,
                perPage: response.data.size,
                isFirstPage: response.data.first,
                isLastPage: response.data.last,
            },
        };
    } catch (error) {
        throw new MXIKUnknownException("Something wrong");
    }
}
