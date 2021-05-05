type Props = {
  message: string;
  data?: any;
  status?: any;
};
export default function handleError({ message, data, status }: Props) {
  return Promise.reject({ message, data, status });
}
