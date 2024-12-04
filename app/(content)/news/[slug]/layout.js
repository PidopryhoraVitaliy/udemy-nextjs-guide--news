export default function NewsDetailLayout(params) {
    // console.log('params', params);

    const { children, modal } = params;
    return (
        <>
            {modal}
            {children}
        </>
    );
}