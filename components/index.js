//  Component index

//  Composition
export * from './Login';

//  View
export * from './AnimatedLogo';
export * from './Logo';
export * from './LayeredImage';
export * from './Loading';
export * from './BsLoading'; //Loading wrapped in full paged flex-center component
export * from './PlannedFeature';
export * from './RenderRichText';
export * from './Diode';
export * from './Hamburger';

//  Structural
export * from './Section'; //section for frontside, title="" & myRef={} props for layout and pageNav

//  Elements
export * from './Empty'; //spacer
export * from './Button';
export * from './ButtonType'; //switch on prop 'type' for common buttonTypes
export * from './Dropdown';
export * from './Form';
export * from './Input';
export * from './InputLabel';
export * from './TypeInput';
export * from './Textarea';
export * from './Select';
export * from './Cimage'; //extension of next.js/Image w. domain specific alt, placeholder etc.
export * from './CloudImg'; //Cloudinary url composer
export * from './NextLink'; //extension of Link/next with active={boolean} toggle
export * from './Text'; //extension of p, if we wanna restyle bread text on the site without breaking scss

//  Enhanced Elements
export * from './Flex'; //Quick Flex grid, main props: center={true} (ali & justi), flexDirection, hei,wid,pad,mar
export * from './Grid'; //Grid
export * from './RichText'; //RichText editor, has internal state logic, <-- overriden by passing setFormData in props
export * from './Fold'; //Foldable container
export * from './List';
export * from './Label';
export * from './FlexWrap';

//  Special
export * from './SlideGrid'; // For slidesApp / presentation. renders grid based on cb input

//  Dev
export * from './ObjectViewer'; //object/array viewer

//  FormHandling
