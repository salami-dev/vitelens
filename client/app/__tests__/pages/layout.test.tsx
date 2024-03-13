import {render, screen} from '@testing-library/react'
import Layout from '../../layout'

test('main page laoutput displays to startv with', ()=>{
    render( <Layout> hello</Layout>);
    const page = screen.getAllByTitle('vitelens')

    expect(page).not.disabled()

})