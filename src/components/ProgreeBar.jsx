import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '1.667vw',
  borderRadius: '1000px',
}));
const ProgreeBar = (props)=>{
    return(
        <BorderLinearProgress color='primary' className="row" variant="determinate" value={props.value} />
    )
}
export default ProgreeBar