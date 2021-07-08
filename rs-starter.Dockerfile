FROM mongo:4.1.3

ADD data/rs.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/rs.sh
