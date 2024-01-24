import { useState, useRef, useEffect, useMemo, useLayoutEffect, useImperativeHandle, forwardRef, Ref } from 'react'
import echarts, { ECOption } from "types/echarts-ref";
import AvgColumn from './AvgColumn';

export type EchartProp = {
  title?: string;
  option: ECOption,
  style?: {
    width: string,
    height: string
  }
  className?: string
}

const removeUndefined = (obj: object) => {
  for (let key in obj) {
    if (obj[key as keyof typeof obj] === undefined) {
      delete obj[key as keyof typeof obj]
    }
  }
  return obj
}

const Echart = ({ title, option, className, style = { width: '800px', height: '500px' } }: EchartProp, ref: Ref<echarts.ECharts | undefined
>) => {

  const chartRef = useRef<HTMLDivElement>(null)
  const [echartsInstance, setEchartsInstance] = useState<echarts.ECharts>()

  useLayoutEffect(() => {
    const instance = echarts.init(chartRef.current as HTMLDivElement);
    setEchartsInstance(instance)
    return () => {
      instance.dispose();
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      echartsInstance?.resize()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [echartsInstance])

  useEffect(() => {
    echartsInstance?.setOption(option)
  }, [echartsInstance, option])

  useImperativeHandle(ref, () => (echartsInstance));


  const obj = useMemo(() => {
    return removeUndefined({ option, className, style });
  }, [option, className, style])

 
  
  return (
    <article className=' '>
      {title ? <h1 className="text-left text-3xl font-bold p-4">
        {title}
      </h1> : null}
      <div className='flex'>
        <div ref={chartRef} {...obj} />
        <AvgColumn option={option} />
      </div>
    </article>
  )
}

export default forwardRef(Echart);