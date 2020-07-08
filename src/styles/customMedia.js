import styled from "styled-components";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
    moreBig: '1300px',
    more: '1140px',
    lessBig: '956px',
    lessMedium: '600px',
});