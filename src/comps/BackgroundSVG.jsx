import * as React from 'react';

function BackgroundSVG(props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 909 1281'
            {...props}
        >
            <defs>
                <style>{'.prefix__cls-10{fill:#424242}'}</style>
            </defs>
            <g id='prefix__Layer_2' data-name='Layer 2'>
                <g id='prefix__Layer_1-2' data-name='Layer 1'>
                    <path
                        id='prefix__SideSurface'
                        fill='#010101'
                        d='M909 1281L0 819.67V637l909 461v183z'
                    />
                    <path
                        id='prefix__Surface'
                        fill='#090909'
                        d='M909 1098V178.67L0 637l909 461z'
                    />
                    <path
                        id='prefix__BackPanel'
                        fill='#c1c7c9'
                        d='M828 98L625.68 0l.32 457 202 101.38V98z'
                    />
                    <path
                        id='prefix__Floor'
                        fill='#c6cbcc'
                        d='M828 558.38L440 750l-201-95 387-198 202 101.38z'
                    />
                    <path
                        id='prefix__SidePanelSolid'
                        fill='#b5bec1'
                        d='M626 457L239 655V196L625.68 0l.32 457z'
                    />
                    <path
                        id='prefix__FrontPanel'
                        fill='#f7f7f7'
                        d='M440 750V293l-201-97v459l201 95z'
                    />
                    <path
                        id='prefix__TopPanel'
                        fill='#dcdcdc'
                        d='M625.68 0L239 196l201 97L828 98 625.68 0z'
                    />
                    <path
                        id='prefix__SidePanelFrame'
                        d='M440 292.66v457L828 558V97.66zm346 235.79L484 677.64V321.82L786.05 170z'
                        fill='#e6e6e6'
                    />
                    <image
                        width={376}
                        height={580}
                        transform='translate(447 134)'
                        xlinkHref='data:image/png;base64,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'
                        id='prefix__SidePanelGlass'
                        opacity={0.06}
                    />
                    <ellipse
                        className='prefix__cls-10'
                        cx={454.5}
                        cy={304}
                        rx={6.11}
                        ry={4.23}
                        transform='rotate(-74.22 454.53 304)'
                        id='prefix__TLScrew'
                    />
                    <ellipse
                        className='prefix__cls-10'
                        cx={815.5}
                        cy={119}
                        rx={6.11}
                        ry={4.23}
                        transform='rotate(-74.22 815.545 118.976)'
                        id='prefix__TRScrew'
                    />
                    <ellipse
                        className='prefix__cls-10'
                        cx={815.5}
                        cy={553}
                        rx={6.11}
                        ry={4.23}
                        transform='rotate(-74.22 815.564 552.997)'
                        id='prefix__BRScrew'
                    />
                    <ellipse
                        className='prefix__cls-10'
                        cx={454.5}
                        cy={729}
                        rx={6.11}
                        ry={4.23}
                        transform='rotate(-74.22 454.551 729.023)'
                        id='prefix__BLScrew'
                    />
                </g>
            </g>
        </svg>
    );
}

export default BackgroundSVG;
