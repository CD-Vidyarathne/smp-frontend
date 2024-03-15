import React from "react";
import SingleStatus from "./SingleStatus.tsx";
import "../styles/Scrollbar.css";
import { StatusResponse } from "../types/Status.ts";

const testStatus: StatusResponse = {
  statusId: "123",
  statusImgURL:
    "https://images.pexels.com/photos/20015800/pexels-photo-20015800/free-photo-of-a-squirrel-sitting-on-a-tree-branch-with-its-eyes-open.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  statusTime: "16:48",
  userFirstname: "Siyumini",
  userImgURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSy1-jZJIrIfi0A1MQVLHVJWp-QUQ8QqthTA&usqp=CAU",
};

const testStatus1: StatusResponse = {
  statusId: "123",
  statusImgURL:
    "https://images.pexels.com/photos/20496825/pexels-photo-20496825/free-photo-of-house-on-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  statusTime: "16:48",
  userFirstname: "Chamindu",
  userImgURL:
    "data:image/jpeg;base64,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",
};
const testStatus2: StatusResponse = {
  statusId: "123",
  statusImgURL:
    "https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  statusTime: "16:48",
  userFirstname: "Thenuja",
  userImgURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PDxUWFg8VFRAVDw8QEBAXFRcWFhUVFRUYHSggGBolGxYXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0lHR0rLSs3LS0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIDBQYDBgUBCQAAAAAAAQIDEQQhMQUSQVFhBhMicYGRBzKhFEKxwdHhIzNScvAVJENigpKissLx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEEAwIF/8QAJBEBAAICAgEDBQEAAAAAAAAAAAECAxESIQQxQVETMkJhcRT/2gAMAwEAAhEDEQA/APYAAdiKVh2AZQrDAAAAAAAAABBcppYmM3aLvbitOWXTqQXCAw8XtTD0f5uIoUuk61OD+rAzLCOY2t2+2fh1fvu/6UV3i/6vl+pVgviLsyo0nXlSb/rpVIpecknFe4HWBYro14TjvwlGcXmpRaafqie8rXAYCTAAEMQUhEhWAiFiVgAjYLEhARsMYAXDACoBgAQWAYAIBkWBqO1u2PsWDq11bejG0Lq635tQhdclKSb6I4un2/7nDKcr1pu0Yxbu+V5NL5m/urgrvkaL4k7WniK0ouUo06Upxir+CThLcb5X3k3x4HAYvHuKUb31z1Xn9X7keoh2e2PiLi8Qu7gowjpaCnG/O7vc1dTtbjEt1VqlNNZ7nhlPhd2SfomkuCOSWLrS+VZLhdL8Cj7TU1m5fkXQ6Gt2ixNS6nWrtPhKtVs+eWlzAWLpybTmk89YrXo/zMPD4qPKSXHO7fldZClapJyUZZcMovLk9GwMl1ottd7a/FJv0RjThKGakpa53aK1JQqJTTaeml3fP6mVWjFytnZ6XbdvLoBtNhdo8fhfFQqzjF/MrRnTf9yeSfXJnTUfiTi+6dOpOk7/ACzit2dN9MtOjTODc6cYyWr4Zu9uOZh0pNv/ADQaNve+xXbynWgoVUoyjuQc1JteJ2i2nnbRXu7X4Hc4bGQqX3ZJ2bjlzR8t4eu15pe3NdUz0DsLt2csTTU6sndxk1e+9JR7pN5eKT3vxfAi6e2CKMNVdkpav1tkZAeSAYAILDACNgGAVEBgBaMdgK8kA7BYAAYAIUkSIVJWWtgPCO3eHlQnWhUae/VrzTWTW9Ju1uTu79GuVjzaum34b5ccj0P4o16n2ycJyjd5pRlvWWaimvu5PQ4qMbNRWrv+7/zkSHti4fDTk0km/wBTZ0+zdaVnb3udf2d2TFQ3mlnodLSwkUs0ZcnkanUNmPxomNy8rey3TlmrPTQhCNrxvaPLqel4zZNObvxz9TR4rs64tuMU03pyFfKifUt4vw4OtQlLrwtqQWFnH7rf1O6jsFx1S9L2Rb/p6Ssy/wCn4SPF+XnNWs76KPRcPcyMLCTWSi/Vfhc3e2Nipu8UjQVqEqbtoaK3izNfHNZ7WqVuX7nUdgKjli4KKlJ34Zystbeehxruei/CFzjjIqK1vdtWyyvZ8bZe/t6l4h7hgKUrb01ZvhyXJGaERkQgGACEMQAyJITAQhgFZADAryQDAAAAACutHiWEaqumuaYHy/2lxLrYmpNyu5Tl4tMr/RWS8kyGzMOpzSUM/N3K8blJt5ZOy8+Hv+B2vZLY0adNVJpOUlfTTjY5ZckUq0YcfOzb7Pod3BLLTnmbOhhXI00tqx7y0IOaWsvu5cEwq9r3TyVCXm7ow/Ttbtv+pFeobjE7OdsvYxo0msmrmPh+1XepXgr9H9VfTyNk8ZHd3nlo7nK1NTp7rk2oeG3ldI1+K2e2bHEbSjFXVjn8d2rjHJWfmy1paZ6LZIj1azaGHcXmjnNsYdPP6m+xPaOnU+aEo+zMCnUhWvH6dDZji1fVkyTW/UOU7tr1yPWvg7hY1fG4QbpvkrxurXTvdfgeY7Rw7oz3c2tV5HpnwKn/ALRiFzpQftLP8V7Gre4Y5jT2VIYxWK8kAwIIgMQCExgAhDADIAYFQAAAADABAMhXqKEZTk7KKlJvkkrsD5t7YbP7radaholWm0uUZPej9GjvKWHvDdu0rJO3I5/txUWI2hHGU6bVOrGjFO925RlZt8nu2Vuh1eHp5GHyrRPHT6PjUmu4lqam0KeG8EaaS4ybSiv7n+RrNtbeju3dKs43mnUWGmoRlBKUleTTdk027G7xGz06sKiScou63478V5J6Pqarb3Z+lVxH2hqScnedOM/4c3ZJtJ5xukr2ediY4p+Tpk5/i1NGUo1LbqvldbrjLPTL/LnZUacJUPFrZaq6XoYsKE6slOSjG1t20Fla1ld3sskbehSSg09WcMtoienWleu3Bbf2govcjd8MtTGwezU/HWlSpXs0p+KbvplqZO3sLu1XKPN3yv8A/TZYTFQWFlShejUbhOOJg5Kr3kHeMm23vcrZZGnHrUOGTe+mqjtWglak6NXVeFxUvOxQ1TnJTgt19Fb0aKYbLUIS7yTryajBN5KEYttZvNu7eZLB4eSWbv8AiWYrHdZeY5T1aGJ2roq1OXW30O7+BGEe9iatslGjC/V3k19E/U4ntKv4VP8Avl/4s9T+ClGEMBK04SnOrKpKCd5U1ZQgpLhdQv6mmn2smX7peggMR7cSAYgpAMRAhDABAAAZAxDKgAAABgAAY204XoVVzp1F/wBrMkU4Jpp6NNP1JMbjSxOpiXk2PwMHhISdk1Og45rP+JG+vr7s2eAjdGv7VS7q9F38CTt/ZNWZmbMreFO/U+TqeOp9pfZ3ud/LYulZaMx6tLe4LyMxVb6kcloNT7SRKirR3Y3t5IMPhnuNtX6mHtvH1qUF3FOFWo7JKcu7guediintatRoL7VGNOds1CbqQ6WlbPIk02vKXO7botzbS0efkRwNC+aS6r9DGpban3snKjJwlpU34K1+cW7mXs+teT3Vld2OupiHmJiZbCOBi1nFGNisGktEvY2Mq9kavH4i6PNeUyttNRtjCqcKK0/ixTfRp3+lzp/hlBw2i0nZSo1brg0pRt+BzWOxVowd1lNu3kmv/Y7b4aYN1MTPE2tGFNRXWU3f8F9Ua43yrDJOopeZelAMDUwIgMAIgMQUgGIgQDAC8AAqAYAAAMAAAADgO3OFVsRvZ+FyjlmvCnl0ujntgYi9OPRZtnqG19kU8TBxlvRbjKO9G17PhnlxPH9nz7rw6brafHR2MWXFMb/cvoYcsTr9Q6ylUHXxcYLebsavD4vetb3KMTFb+9JuS4LkcKx3qWi09bZFXaE6i3owyzSuuuTsYuIp15xUZLVZrLJ8iFPFV5y3I03SjHnJKU/bMtxGEru9oRV1xqLm73sdNaeYiZcpjsLUpyu4XV+j9mZuB2nTWTW6yza1GtTXhUVbVd4mpehqa1PfjvuO67JtZW9D3xifV4mZpPTfVcWramqxNS6vfizGp1bRt9CqtW6krTstfop0XVqKF2ko5vj6Htfw+wndYGHh3d6VSXNvPdTfpFHmnZPszicXerTitze3e8lKKjFpJvLV68Ee0bPwio0oUo5qEYxvxdtX6vM00ieW2TJaOGv2vAYHVnIRIQCESEAhDAKQABBeADKhDAAABgAAAAB412kwaw+Mq07WvJyWfCdpZe9j2U4r4j7DdWEcVBXlTTUlxcHx9H9LnjJXcOuG2rOJ2fUzvbJ5+5tKbjKavwNJgatm75mZhsYt/iut3b0MNqzt9GJjTeVXFK+6pGlx20Jp5Ulbh4tTYfa4Wb3s+RpNpT3ndOyt1afqStZ91m0exYipvZzp+7NPjLWd/bkZksemrPLLnmvU0+LnyZ0rE7c72hXW4GIr3Mic1bMyuzWznisVSoab80m+izl9EzvWHC8vafh5gXQ2fSTVnJOo/wDne8vo0dIKlTUYqKySSS8kSO7JJAOwBCAYARESACNhMkICIDAC4BgAAAAAwAAAAACrFU1KEovNOMk15potFJ5AeBY1ulPdcbr7sldX5XMb7S0rxdvJafudHtTApuUJqzTa6qzsctWwc6cnZ+WSafuZ6Wi0an1bb1tXuPROePfGWWV1/UY0tsykuWvVFWIxHGpTa6pNrzMB1aN86lvNM9xjh4m8p18S5f5rn+BU6jfuRlWpaKTfkmVvE/0q3meuLxylbOpZZ8DqvhpJ/wCoUZPjKyXJNNHGJSm/bodf2Npy+1UVDXeT9s2/ZMkzrpYjcTMvoICvDVd+Kfv5lp0ZyESEAhEhAIRIQCEMQCAYAWgAwAAAAAAAAFKSWpTOs+H7gWyklq7FM618kvUra4vMI5so5ztTsdt/aKUW39+KV2/+Jfn7nDYqhdXXtkewo57bfZuNS9SilGWd4ZKM/Lk/p5amfLinfKrXhzxrjd5o8FF5und8m7X99TCr7Gp5vciny3VY6avg2m4yi007OLTTia7E4drJb31Zn5tfCHI4jZ6isopdbGHHBvkdTUwrWqKo4K7u9PodIyuc4ty0lLDpacD0zsD2ddGP2qrFqc1anB6wg895rnLL082T7K9jEmsRio5Kzp0GtXwlUXLlH35HaVMzvjrPrLNlvH21KhiZU72s+jMultOL+aLj9UYFSOTBQtk8zrpmbqnVjL5ZJkzTqn6F9OtOPHeXXMaGxEU0sTF9H1/UvIEIYARESEAgGAFgAAAApSS1KpVXwy6gWyklqVyrcvcqt6hYoHmNICQELDprIaFHLICYiQEGBtLZdOuvErS4TXzLp1XQ4zbGzKmH+eN452qK7j6/0vzPQWaPbu3aWHpTrVZ93RhbelZuU23aMYri28rHLJhrf+u+LPan8ee06TrT7ulF1JPRRz9W9EuryO37P9lYYe1Wtu1auTS/3dN9FxfV+nM1vYftT9v76VDCQwsac1Frwvfuk4tuKXitquHN6nZU6yl0fL9CY8EU7nt6y+Ta/UdQrqJsq3DJmio0MytQ/Itq0tGSoxz+pPEaAVJCorxDp5k4x8QFUqebXquo6dSUOq5cP2LMRwYV45by1/EgyaVVSWXtxRM1tN3zi7My6WJvlLJ/RkF4hiAAAAJlVSfBe5KrO2mpXFAQJIJIUGUDBCWbJMAGJIbABNDABoYkYWLnKb7uN0vvP8iCnHYpz8EHlxfP9iuGy41aUqVaEKsJZShOKlGSeqaM+jhYxRfEqsTZmyqGGpqlQpU6MFdqEIqMbvV5asyHTTJihx8wiuorFLMis8iiFJ2y9ALMNxfW3sLFvIuhGysUYvQAwyyLUsyGHXhLYgVYnQnHQhidCdPQDDpK02iyt7hKP8T0J1Vf0sUOlX3cpO64PivMy0zCqRVsxYSvuvcl6PkQZ4ABBRq7k0RiOLKGyqb3bl0kY9cCyisgeo6WgPUCSAAYEVqSIkgEwSBggCQoimOnoBJCjx82SQl+oFNUspLIrnqXR0AjUlZFOIXgHWldpEsSvCAqC8KLIioLwoegFeK+UnT0FiFeLI4Z3igCcc7ldJ3kyeJnZXI4eNmwDFfKzFxCvFS9GZGOlklzaK5R/hy9Sij7RP8AqfuBTvANDdxFL9BrUTIJsoxGhZTd4kKiuBOksgY1khRAkJjYgEySIscQGIYmBCY4OyEyurSVSnKF2rpq61QE8NioVL7koytrZp2/zP2LV+pzXZDsxLA3TnCS8aiopq6lJNym3q7RitOebvl0iAhJZk75CkinEVLKwEKPincyK6yKcHHiZEwI0tCTIUydwFJXRRhHk0ZBiwe7NrmAtoSyXmZFJZGJj1nDzZluVo35IDDxL3qiXIniMqbKsOr3k+LLMa/ClzZRh7gGRuABseIpaoAII4fR+ciQAApk4CAByEAAEgiIAJMTEAEJksPoAAWkUAAKRg4nUALAycNoWsQERGIxgFMw6/8AMQAAY3WPmTxn8t+SAAIUvliQxvzIAKGAAB//2Q==",
};
const StatusSection: React.FC = () => {
  return (
    <div className="overflow-x-scroll mb-4">
      <div className="flex space-x-4 py-4 overflow-x-auto flex-nowrap">
        <StatusCreate />
        <SingleStatus status={testStatus} />
        <SingleStatus status={testStatus1} />
        <SingleStatus status={testStatus2} />
        <SingleStatus status={testStatus} />
        <SingleStatus status={testStatus1} />
        <SingleStatus status={testStatus2} />
      </div>
    </div>
  );
};

const StatusCreate: React.FC = () => {
  return (
    <div className="relative min-w-44 min-h-64 flex justify-center border border-base-content items-center rounded-lg cursor-pointer">
      <div className="text-4xl w-12 h-12 rounded-full border border-dashed text-center cursor-pointer">
        +
      </div>
    </div>
  );
};

export default StatusSection;
