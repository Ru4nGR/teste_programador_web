import React from 'react'
import UserForm from '../../components/UserForm'
import TopNav from '../../components/TopNav'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

interface Props {
    authenticated : boolean
}

const Create : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <UserForm register/>
            </div>
        </div>
    )

}

const useStyles = createUseStyles({
    content : {
        width : '100vw',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

const root = document.getElementById('root')
const authenticated = root?.getAttribute('authenticated') === '1'
render(<Create authenticated={authenticated}/>, root)