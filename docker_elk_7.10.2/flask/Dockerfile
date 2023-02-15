ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}

WORKDIR /usr/src/app
ENV FLASK_APP=app

COPY ./app/requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["flask", "run", "--host=0.0.0.0"]