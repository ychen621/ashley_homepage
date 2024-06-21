import "./Publication.css"
import BoldText from "./BoldText";

var author_arginine = "Wang YC, Kelso AA, Karamafrooz A, Chen YH, Chen WK, Cheng CT, Qi Y, Gu L, Malkas L, Taglialatela A, Kung HJ, Moldovan GL, Ciccia A, Stark JM, Ann DK."
var author_DNA = "Xu X, Chang CW, Li M, Omabe K, Le N, Chen YH, Liang F, Liu Y."
var author_lncRNA = "Wu YZ, Chen YH, Cheng CT, Ann DK, Kuo CY."

const name = "Chen YH";

function Publication(){
    return(
        <>
            <>
            <div className="publications_parent">
                <h2 className="title">Publications</h2>
                <div id="publication_container">
                    <ul className="paperul">
                        <li className="paperli">
                            <h4 className="paper_title"><a href="">Arginine shortage induces replication stress and confers genotoxic resistance by inhibiting histone H4 translation and promoting PCNA ubiquitination</a></h4>
                            <BoldText text={author_arginine} boldText={name}></BoldText>
                        </li>
                        <li className="paperli">
                            <h4 className="paper_title"><a className="paper_title" href="">DNA replication initiation factor RECQ4 possesses a role in antagonizing DNA replication initiation</a></h4>
                            <BoldText text={author_DNA} boldText={name}></BoldText>
                        </li>
                        <li className="paperli">
                            <h4 className="paper_title"><a className="paper_title" href="">Amino acid restriction induces a long non-coding RNA UBA6-AS1 to regulate GCN2-mediated integrated stress response in breast cancer.</a></h4>
                            <BoldText text={author_lncRNA} boldText={name}></BoldText>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        </>
    )
}

export default Publication;