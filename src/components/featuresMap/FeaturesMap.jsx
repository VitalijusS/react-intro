import { Feature } from './Feature';
import style from './Features.module.css';

export function FeaturesMap(params){
    return (
        <section className={style.featuresList}>
          {params.list.map((item, index)=>
            <Feature 
              key={index} data={item}/>
          )}
          
        </section>
        
    );
}