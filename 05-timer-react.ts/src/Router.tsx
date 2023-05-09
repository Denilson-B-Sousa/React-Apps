import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History/Index'
import { DefaultLayout } from './layouts/DefaultLayout/Index';
export function Router(){

    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}> {/*Layout aplicado em todas rotas */}
                <Route path="/" element={<Home />}/>
                <Route path="/history" element={<History/>}/>
            </Route>

            {/*<Route path="admin" element={AdminLayout />}>
                    <Route path="/products" />
               </Route>

               localhost:8080/admin/products os paths são encadeados
            */}
         </Routes>
    );
}