import { Feature } from './Feature';
import style from './Features.module.css';

export function FeaturesMap(params){
    return (
        <section className={style.featuresList}>
          {params.list.map(({icon, title,description}, index)=>
            <Feature 
              key={index} 
              icon={icon} 
              title={title} 
              description={description}/>
          )}
          
        </section>
        
    );
}