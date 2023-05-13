import { supabase } from "@/lib/Store"

export const get_menu = async (setMenu: any) => {
    await fetch(`/api/collect/equips/collect?str=${'/'}`, {
        method: "GET"
    }).then(res => res.json()).then(data => {
        // console.log(data, '--->data')
        create_menu_ref(data.uls).then((res) => {

            setMenu(res.data)
        })
    }).catch(error => console.log(error))

}

export const get_local_menu = async () => {
    const { data, error } = await supabase.from('sochen').select('*').eq('searchQuery', 'get resource menu')
    return { data, error }
}

export const create_menu_ref = async (list: any) => {
    const { data, error } = await supabase.from('sochen').insert([{
        searchQuery: 'get resource menu',
        data: list
    }]).select('*').single()
    return { data, error }
}

export const get_sub_menu = async (link: any, setSub: any, setLoading: any) => {
    await fetch(`/api/collect/equips/subs?str=${`/${link}`}`, {
        method: "GET"
    }).then(res => res.json()).then(data => {
        // console.log(data, '--->data')
        create_sub_menu_ref(link, data.sub_uls).then((res) => {

            setSub(res.data.sub_uls)
            setLoading(false)

        })
    }).catch(error => {
        console.log(error)
        setLoading(false)

    })
}

export const get_local_sub_menu = async (link: any) => {
    const { data, error } = await supabase.from('sochen').select('*').eq('searchQuery', `get resource sub menu for ${link}`)
    return { data, error }
}

export const create_sub_menu_ref = async (link: any, list: any) => {
    const { data, error } = await supabase.from('sochen').insert([{
        searchQuery: `get resource sub menu for ${link}`,
        data: list
    }]).select('*').single()
    return { data, error }
}

export const get_product_list = async (link: any, setProductList: any, setLoading: any) => {
    await fetch(`/api/collect/equips/products?url=${`${link}`}`, {
        method: "GET"
    }).then(res => res.json()).then(data => {
        // console.log(data, '--->data-------->')
        create_product_list_ref(link, data.product_uls).then((res) => {
            // console.log('------> from sochen of product', res)
            setProductList({ label: link, list: res.data.data })
            setLoading(false)

        })
    }).catch(error => {
        console.log(error)
        setLoading(false)

    })
}

export const get_local_product_list = async (link: any) => {
    console.log('getting ref----->', link)
    const { data, error } = await supabase.from('sochen').select('*').eq('searchQuery', `get resource product list for ${link}`)
    return { data, error }
}

export const create_product_list_ref = async (link: any, list: any) => {
    console.log('------> in ref creation')
    const { data, error } = await supabase.from('sochen').insert([{
        searchQuery: `get resource product list for ${link}`,
        data: list
    }]).select('*').single()
    return { data, error }
}


