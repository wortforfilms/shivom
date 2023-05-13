import { supabase } from "@/lib/Store";
import { create_sochen } from "../c/sochen";

export const update_short_sale_pics = async (data: any, id: string) => {
  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("images")
    .eq("id", id);

  if (c) {
    // console.log("images",c)
    const imgs = c[0].images;
    const { data: shorts, error } = await supabase
      .from("shorts")
      .update([
        {
          images: imgs ? [...imgs, data] : [data],
          status:'preview_finalized'

        },
      ])
      .eq("id", id);

    return { shorts, error };
  }
};

export const update_sales_short = async (data: any, id: string) => {
  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("images")
    .eq("id", id);

  if (c) {
    // console.log("images",c)

    const { data: shorts, error } = await supabase
      .from("shorts")
      .update([
        {
          data: data,
          status:'preview_finalized'

        },
      ])
      .eq("id", id);

    return { shorts, error };
  }
};

export const update_sales_shorts_images = async (url: string) => {
  const id = url.split("/");

  console.log(id, "split view");

  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("images")
    .eq("id", id[7]);

    if (c) {
      // console.log("images",c)
      const imgs = c[0].images;
      const { data: shorts, error } = await supabase
        .from("shorts")
        .update([
          {
            images: imgs ? [...imgs, url] : [url],
            status:'preview_finalized'
  
          },
        ])
        .eq("id", id);
  
      return { shorts, error };
    }
};

export const update_sales_shorts_variance_images = async (url: string) => {
  const id = url.split("/");

  console.log(id, "split view");

  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("images")
    .eq("id", id[4]);

    if (c) {
      // console.log("images",c)
      const imgs = c[0].images;
      const { data: shorts, error } = await supabase
        .from("shorts")
        .update([
          {
            images: imgs ? [...imgs, url] : [url],
            status:'preview_finalized'
  
          },
        ])
        .eq("id", id[4]);
  
      return { shorts, error };
    }
};

export const update_sales_short_variance = async (data: any, id: string) => {
  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("variance")
    .eq("id", id);

  if (c) {
    // console.log("images",c)

    const { data: shorts, error } = await supabase
      .from("shorts")
      .update([
        {
          variance: c[0].variance ? [...c[0].variance, data]:[data],
          status:"variance_updated"
        },
      ])
      .eq("id", id);

  create_sochen({ data: shorts }, "item to short via variance by vender");


    return { shorts, error };
  }
};

export const update_sales_short_topics = async (data: any, id: string) => {
  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("topics")
    .eq("id", id);

  if (c) {
    console.log("topics --=->",c)

    const { data: shorts, error } = await supabase
      .from("shorts")
      .update([
        {
          topics: c[0].topics ? [...c[0].topics, ...data]:[...data],
          status:"topic _updated"
        },
      ])
      .eq("id", id);

  create_sochen({ data: shorts }, "item to short via topic by vender");


    return { shorts, error };
  }
};

export const update_sales_short_topic = async (data: any, id: string) => {
  const { data: c, error: e } = await supabase
    .from("shorts")
    .select("data")
    .eq("id", id);

  if (c) {
    console.log("images------> data",c)

    const { data: item, error } = await supabase
      .from("shorts")
      .update([
        {
          data: JSON.stringify({...c[0].data,data}),
          status:"topics_updated"
        },
      ])
      .eq("id", id);

  create_sochen({ data: item }, "short extra info by vender");


    return { item, error };
  }
};

// update shorts

// place token copies across
// interest sale learn new release

// future release

// search box

// words count
// *

// python report

//
// 00000
// transmit signal
// gps  video

// ed if ice

// 250 * 100
//
