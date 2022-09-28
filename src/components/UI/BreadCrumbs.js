import { Breadcrumbs, Typography, Link, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BreadCrumbs = ({ location: { pathname }, translate, ...props }) => {
   const navigate = useNavigate()
   const pathnames = pathname?.split('/')?.filter((x) => x)
   const updatedPathnames = pathnames?.map((path) => {
      if (/[0-9]/.test(path)) {
         return translate
      }
      return path
   })
   return (
      <LayoutBreadcrumbs aria-label="breadcrumb">
         {updatedPathnames?.map((element, index) => {
            const toUpperPathName =
               // eslint-disable-next-line no-unsafe-optional-chaining
               element[0]?.toUpperCase() + element?.slice(1)
            const routeTo = `/${updatedPathnames
               ?.slice(0, index + 1)
               ?.join('/')}`
            const isLast = index === updatedPathnames.length - 1
            return isLast ? (
               <Title
                  key={toUpperPathName}
                  color={props.color}
                  fontSize={props.fontSize}
               >
                  {toUpperPathName}
               </Title>
            ) : (
               <LinkStyle
                  fontSize={props.fontSize}
                  key={toUpperPathName}
                  onClick={() => {
                     navigate(routeTo)
                  }}
               >
                  {toUpperPathName}
               </LinkStyle>
            )
         })}
      </LayoutBreadcrumbs>
   )
}

export default BreadCrumbs

const LayoutBreadcrumbs = styled(Breadcrumbs)`
   display: flex;
   align-items: center;
   & .css-4pdmu4-MuiBreadcrumbs-ol {
      display: flex;
      align-items: center;
      line-height: 17px;
      height: 18px;
   }
   & .css-1wuw8dw-MuiBreadcrumbs-separator {
      margin-left: 6px;
      margin-right: 6px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 800;
      color: #c4c4c4;
      margin-top: 0;
      margin-bottom: 0;
   }
`
const Title = styled(Typography)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: ${(props) => props.fontSize || '14px'};
   line-height: 17px;
   cursor: pointer;
   color: ${(props) => props.color || '#363636'};
`
const LinkStyle = styled(Link)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: ${(props) => props.fontSize || '14px'};
   line-height: none;
   text-decoration: none;
   cursor: pointer;
   color: ${(props) => props.colorlink || '#c4c4c4'};
`
