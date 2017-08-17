# coding=utf-8
from django.core.mail.message import EmailMessage
from django.shortcuts import render_to_response
from rest_framework.response import Response
from rest_framework.views import APIView

from builder.models import (Language, Framework, Time, Level, Order, Developers)
from builder.serializers import (LanguageSerializer, FrameworkSerializer, WorktimeSerializer, LevelSerializer, )


class Information(APIView):
    @staticmethod
    def get(request):
        langs = Language.objects.all()
        frameworks = Framework.objects.all()
        worktime = Time.objects.all()
        level = Level.objects.all()
        result = dict(langs=LanguageSerializer(langs, many=True).data,
                      frameworks=FrameworkSerializer(frameworks, many=True).data,
                      worktime=WorktimeSerializer(worktime, many=True).data,
                      level=LevelSerializer(level, many=True).data)
        return Response(result)

    @staticmethod
    def post(request):

        find = Order(manager=request.data.get('managerReq'), email_address=request.data.get('clientEmail'),
                     project_description=request.data.get('projectDescription'))
        find.save()
        post = request.data.get('dev')

        for item in post:
            post_lang = item['langs']
            for element in range(len(post_lang)):
                language = post_lang[element]['lang_name']
                lang = Language.objects.get(lang_name=language)
                find.langs.add(lang)

            post_frame = item['frameworks']
            for element in range(len(post_frame)):
                framework = post_frame[element]['frame_name']
                lang_id = post_frame[element]['frame_lang']
                frame = Framework.objects.get(frame_name=framework, frame_lang_id=lang_id)
                find.frames.add(frame)

            post_time = item['worktime']
            for element in range(len(post_time)):
                times = post_time[element]['time_name']
                time = Time.objects.get(time_name=times)
                find.times.add(time)

            post_level = item['level']
            for element in range(len(post_level)):
                level = post_level[element]['lvl_name']
                lvl = Level.objects.get(lvl_name=level)
                find.levels.add(lvl)
        find.save()
        last_id = Order.objects.latest('id').id
        files = Developers.objects.raw("""SELECT DISTINCT d.id
FROM developer AS d

JOIN developer_dev_lang AS dl ON d.id = dl.developers_id
JOIN language AS lg ON dl.language_id = lg.id
JOIN order_langs AS ol ON ol.language_id = lg.id

JOIN developer_dev_frame AS df ON d.id = df.developers_id
JOIN framework AS fm ON df.framework_id = fm.id
JOIN order_frames AS 'of' ON of.framework_id = fm.id

JOIN developer_dev_time AS dt ON d.id = dt.developers_id
JOIN 'time' AS t ON dt.time_id = t.id
JOIN order_times AS ot ON ot.time_id = t.id


JOIN 'order' AS o ON o.id = ol.order_id OR o.id = of.order_id
WHERE o.id = %d""" % last_id)

        text_email = """CV\'s that perfectly fits for you.\n
You have also mentioned that you need project manager.\nHe will contact you soon."""
        to_email = request.data.get('clientEmail', '')
        if request.data.get('managerReq'):
            email = EmailMessage('Cusbee', text_email,
                                 'makedream60@gmail.com',
                                 [to_email])
        else:
            email = EmailMessage('Cusbee', 'CV\'s that perfectly fits for you.', 'makedream60@gmail.com',
                                 [to_email])

        for selected in files:
            val = Developers.objects.values().get(dev_name__exact=selected)
            file_path = val['dev_file']
            print file_path
            email.attach_file('/home/makedream/team_build/builder/media/%s' % file_path)
        email.send()

        return Response()


def index(request):
    return render_to_response('builder/index.html')
