import React from 'react';
import { getColumnItemsFromObject } from 'utils/array'
import { ECOption } from "types/echarts-ref";
import clsx from 'classnames';

interface IProps {
    option: ECOption;
}
const getColor = (index: number) => {
    switch (index) {
        case 0:
            return 'text-[#719DA3]'
        case 1:
            return 'text-[#FDC87A]'
        case 2:
            return 'text-[#89BA9C]'
        case 3:
            return 'text-[#8170FC]'
        case 4:
            return 'text-[#4C7A81]'

    }
}
const AvgColumn: React.FC<IProps> = ({ option, }: IProps) => {
    if (Array.isArray(option?.series))
        return <article>
            <h2 className='text-2xl text-dark'>Avg <br /><span className='text-grey'> Unit</span></h2>
            {Array.isArray(option?.series) &&
                <div className='flex flex-col gap-y-4 mt-2'>
                    {option.series?.map((item: any, index: number) =>
                        <p key={index}
                            className={clsx('text-5xl',getColor(index))}
                        >
                            {getColumnItemsFromObject(Array.isArray(option.series) ? [...option.series] : [], index)}
                        </p>)}
                </div>}

        </article>

    return null
}

export default AvgColumn;