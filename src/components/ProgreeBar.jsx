import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10
}));
const ProgreeBar = (props)=>{
    return(
        <BorderLinearProgress color='secondary' className="row" variant="determinate" value={props.value} />
    )
}
export default ProgreeBar