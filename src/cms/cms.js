import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import VideoPostPreview from "./preview-templates/VideoPostPreview";
import { TransliteControl } from "src/cms/widgets/video/Control";
import { TranslitePreview } from "src/cms/widgets/video/Preview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerWidget("translite", TransliteControl, TranslitePreview);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("video", VideoPostPreview);

// CMS.registerWidgetValueSerializer("string", (a, b) => {
//   console.log(123123);
//   return () => {
//     console.log(23424);
//   };
// });
// console.log(CMS.getWidgetValueSerializer("string"));
// console.log(CMS);
