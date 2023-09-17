import React from 'react'

import OnPageBoxFirst from './common/OnPageBoxFirst';
import OnPageBoxSecond from './common/OnPageBoxSecond';

import { useRecoilValue } from 'recoil';
import { fetchedApiData } from '../store/selectors/apiData';

const OnPageResult = () => {

  const _fetchedApiData = useRecoilValue(fetchedApiData);

  const onPageTopData = getOnPageTopData(_fetchedApiData);
  const onPageBottomData = getOnPageBottomData(_fetchedApiData);

  return (
    <div>
      <h2 className='text-2xl md:text-3xl font-semibold text-center mb-5 text-primary-color'>Onpage Results</h2>
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 pb-10'>{
          onPageTopData.map((data, index) => {
            return (
              <OnPageBoxFirst data={data} key={index} />
            )
          })
        }</div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-5 pb-10'>{
          onPageBottomData.map((data, index) => {
            return (
              <OnPageBoxSecond data={data} key={index} />
            )
          })
        }</div>
      </div>
    </div>
  )
}

function getOnPageTopData(data) {

  const onpageData = data.tasks[0].result[0].items[0].meta;

  const onPageTopData = [
    { label: "Internal Links", value: onpageData.internal_links_count },
    { label: "External Links", value: onpageData.external_links_count },
    { label: "Number of Images", value: onpageData.images_count },
    { label: "Images Size", value: onpageData.images_size },
    { label: "Scripts", value: onpageData.scripts_count },
    { label: "Scripts Size", value: onpageData.scripts_size },
    { label: "Plain Text Size", value: onpageData.content.plain_text_size },
    { label: "Plain Text Rate", value: onpageData.content.plain_text_rate },
    { label: "Plain Text Word Count", value: onpageData.content.plain_text_word_count },
    { label: "Automated Readability Index", value: onpageData.content.automated_readability_index },
    { label: "Coleman Liau Readability Index", value: onpageData.content.coleman_liau_readability_index },
    { label: "Dale Chall Readability Index", value: onpageData.content.dale_chall_readability_index },
    { label: "Flesch Kincaid Readability Index", value: onpageData.content.flesch_kincaid_readability_index },
    { label: "Smog Readability Index", value: onpageData.content.smog_readability_index },
    { label: "Description to Content Consistency", value: onpageData.content.description_to_content_consistency },
    { label: "Title to Content Consistency", value: onpageData.content.title_to_content_consistency },
  ];
  return onPageTopData;
}

function getOnPageBottomData(data){

  const onpageData = data.tasks[0].result[0].items[0];

  const onPageBottomData = [
    { label: "Duplicate Title", value: onpageData.duplicate_title, description: "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords." },
    { label: "Duplicate Description", value: onpageData.duplicate_description, description: "meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords." },
    { label: "Duplicate Content", value: onpageData.duplicate_content, description: "Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords." },
    { label: "Size", value: onpageData.size, description: "The size of your page is too large. This can negatively impact your page load speed and user experience." },
    { label: "Cache Control", value: onpageData.cache_control.cachable, description: "Your page does not have a cache control header. This can negatively impact your page load speed and user experience." },
    { label: "Canonical", value: onpageData.checks.canonical, description: "Your page does not have a canonical tag. This can negatively impact your page load speed and user experience." },
    { label: "No H1 Tag", value: onpageData.checks.no_h1_tag, description: "Your page does not have an H1 tag. This can negatively impact your page load speed and user experience." },
    { label: "HTTPS to HTTP Links", value: onpageData.checks.https_to_http_links, description: "Your page has links to HTTP pages. This can negatively impact your page load speed and user experience." },
    { label: "Is 4xx Code", value: onpageData.checks.is_4xx_code, description: "Your page has a 4xx status code. This can negatively impact your page load speed and user experience." },
    { label: "Is 5xx Code", value: onpageData.checks.is_5xx_code, description: "Your page has a 5xx status code. This can negatively impact your page load speed and user experience." },
    { label: "Is Broken", value: onpageData.checks.is_broken, description: "Your page has broken links. This can negatively impact your page load speed and user experience." },
    { label: "Low Content Rate", value: onpageData.checks.low_content_rate, description: "Your page has a low content rate. This can negatively impact your page load speed and user experience." },
    { label: "Has Render Blocking Resources", value: onpageData.checks.has_render_blocking_resources, description: "Your page has render blocking resources. This can negatively impact your page load speed and user experience." },
    { label: "Low Readability Rate", value: onpageData.checks.low_readability_rate, description: "Your page has a low readability rate. This can negatively impact your page load speed and user experience." },
    { label: "Title Too Long", value: onpageData.checks.title_too_long, description: "Your page has a title that is too long. This can negatively impact your page load speed and user experience." },
    { label: "No Image Alt", value: onpageData.checks.no_image_alt, description: "Your page has images without alt tags. This can negatively impact your page load speed and user experience." },
    { label: "No Favicon", value: onpageData.checks.no_favicon, description: "Your page does not have a favicon. This can negatively impact your page load speed and user experience." },
    { label: "Recursive Canonical", value: onpageData.checks.recursive_canonical, description: "Your page has a recursive canonical tag. This can negatively impact your page load speed and user experience." },
    { label: "Is Orphan Page", value: onpageData.checks.is_orphan_page, description: "Your page is an orphan page. This can negatively impact your page load speed and user experience." },
    { label: "Web Server", value: onpageData.server, description: "information is the information about the software that is running on the server. This can be used to determine the technology stack of a website." },
    { label: "Title", value: onpageData.meta.title, description: "The title tag is an HTML tag that is used to define the title of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page." },
    { label: "Description", value: onpageData.meta.description, description: "The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page." },
    { label: "Canonical", value: onpageData.meta.canonical, description: "The canonical tag is an HTML tag that is used to define the canonical URL of a webpage. This tag is used by search engines to determine the canonical URL of a page." },
  ];
  return onPageBottomData;
}


export default OnPageResult