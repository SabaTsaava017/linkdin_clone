import { SvgProps } from "@/app/interface/HeaderInterface";


export default function FeedSvg({width, height}: SvgProps) {
    return (
        <svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="rss">
                <path id="Vector" d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    )
}