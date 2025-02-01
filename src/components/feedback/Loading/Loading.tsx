
type LoadingProps = {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  children: React.ReactNode;
}

function Loading({ status, error, children }: LoadingProps) {

  if (status === "pending") {
    return <p>Loading...</p>
  }

  if (status === "failed") {
    return <p>Error: {error}</p>
  }

  return <>{children}</>
}

export default Loading
