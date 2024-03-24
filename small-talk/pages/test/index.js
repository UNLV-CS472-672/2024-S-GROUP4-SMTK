import { smolAuth } from "@/components/smolAuth";

export const TestPage = () => {
    return (
        <></>
    )
} 

export default TestPage;

export const getServerSideProps = smolAuth(
    async(_ctx) => {
        return {
            props: {}
        }
    }
)//