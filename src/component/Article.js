import '../compCss/Hlight.css';

export default function Article( { ats }) {
    return (
        <a target="_blank" className="ar_wrap" href={ats.link} >
            <img className="hl_img" 
            src={ats.image}
            />
            <div className="hl_stitle">
                {ats.title}
            </div>
        </a>
    );
  }
  