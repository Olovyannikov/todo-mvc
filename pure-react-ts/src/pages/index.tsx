import {withLayout} from "../client/app/layout/Layout";
import {IndexPage} from "../client/app/public/IndexPage/IndexPage";

const Index = (): JSX.Element => <IndexPage/>

export default withLayout(Index);