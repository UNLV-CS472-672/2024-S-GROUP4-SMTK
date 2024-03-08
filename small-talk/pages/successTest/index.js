import { smolAuth } from "@/components/smolAuth"

export const getServerSideProps = smolAuth(async () => {
    return {
        props : {
            data: "hi"
        }
    }
})

const successTest = (props) => {

    return (
        <>{props.data}</>
    )
}

export default successTest