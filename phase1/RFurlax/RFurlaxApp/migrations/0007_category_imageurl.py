# Generated by Django 4.1.13 on 2024-02-27 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RFurlaxApp', '0006_alter_invoice_tenure'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='imageurl',
            field=models.URLField(default='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/kitchens/modular-kitchen-colour-combinations-for-every-indian-kitchen-design/title-neutral-modular-kitchen-design.jpg'),
            preserve_default=False,
        ),
    ]