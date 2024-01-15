const withBorder = (WrappedCompnents: any) => {
  return (props: any) => (
    <div className="border-4 border-red-600 rounded-full">
      <WrappedCompnents {...props} />
    </div>
  );
};

export default withBorder;
