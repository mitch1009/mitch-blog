import { MitchComponent,BlogComponent,OneBlogComponent,NavigationComponent } from ".";
import { Route, Routes } from "react-router-dom"
export const BlogRouting = () => {
    const data = {
        title: " Mitch Blog",
        description: "Mitch Blog Post",
    }
    return(
        <>
        <NavigationComponent/>
        <Routes>
         <Route path="/" element={<MitchComponent title={data.title}/>} />
         <Route path="/blogs" element={<BlogComponent/>} >
            <Route path=":id" element={<OneBlogComponent/>}/>
         </Route>
        </Routes>
       </>
    )
};
