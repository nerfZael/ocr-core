import { OcrId } from "./OcrId";
import { bytesToString } from "@nerfzael/encoding";
import { encodeOcrIdAsContenthash } from "./encodeOcrIdAsContenthash";

export const encodeOcrIdAsContenthashString = (
  ocrId: OcrId,
  ocrProtocolId?: number
): string => {
  return bytesToString(encodeOcrIdAsContenthash(ocrId, ocrProtocolId));
};
