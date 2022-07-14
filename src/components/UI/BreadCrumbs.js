import { Breadcrumbs, Typography, Link, styled } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

const BreadCrumbs = ({
   urlPages,
   titleFirstUrl,
   closeBreadcrumbs,
   ...props
}) => {
   const navigate = useNavigate()
   const { pathname } = useLocation()

   const pathNames = pathname.split('/').filter(Boolean)
   // eslint-disable-next-line consistent-return, array-callback-return
   const newPathName = pathNames.map((item) => {
      // eslint-disable-next-line consistent-return, array-callback-return
      const objPathName = urlPages.find((element) => {
         if (element.id === +item) {
            return element
         }
      })
      if (/[0-9]/.test(item)) {
         return objPathName.name
      }
      return item
   })

   const toUpperTitle = titleFirstUrl[0].toUpperCase() + titleFirstUrl.slice(1)

   return (
      <LayoutBreadcrumbs aria-label="breadcrumb">
         {newPathName.length ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <LinkStyle
               onClick={() => {
                  navigate('/')
                  closeBreadcrumbs()
               }}
            >
               {toUpperTitle}
            </LinkStyle>
         ) : (
            <Title style={props}>{toUpperTitle}</Title>
         )}
         {newPathName.map((element, index) => {
            const routeTo = `${newPathName.slice(0, index + 1).join('/')}`
            const isLast = index === newPathName.length - 1
            const toUpperName = element[0].toUpperCase() + element.slice(1)
            return isLast ? (
               <Title key={toUpperName} style={props}>
                  {toUpperName}
               </Title>
            ) : (
               // eslint-disable-next-line jsx-a11y/anchor-is-valid
               <LinkStyle key={toUpperName} onClick={() => navigate(routeTo)}>
                  {toUpperName}
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
