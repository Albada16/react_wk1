import '../compCss/Hlight.css';
import Article from './Article';
import articleT from "../json/article.json";

export default function Hlight() {
  return (
    <div className="Hlight">
        <div className="hl_title">BLOCTO HIGHLIGHT</div>
        <div className='article'>
          {articleT.map(ats => (
            <Article key={ats.id} ats={ats}/>
          ))}
        </div>
    </div>
  );
}

