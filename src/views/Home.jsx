import '../style/style.css'
import { TextoRandom } from '../components/TextoRandom'

export function Home(){
    return (
        <div className="d-flex justify-content-between mt-4">
            <TextoRandom/>
            <TextoRandom/>
        </div>
    )
}